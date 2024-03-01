from cli.types.docs_video import DocsVideo
from cli.utils.markdown_helper import get_markdown_slug


class BlockDocsBuilder:
    def __init__(self, block_name, block_folder_path, description, thumbnail):
        self.github_base = "https://github.com/flojoy-ai/blocks/blob/main/blocks/{block_folder_path}/{block_name}.py"
        self.block_name = block_name
        self.block_folder_path = block_folder_path
        self.description = description
        self.github_link = self.github_base.format(
            block_name=block_name, block_folder_path=block_folder_path
        )

        self.template = """\
---
title: {block_name}
description: "{description}"
slug: {slug}
head:
    - tag: meta
      attrs:
        property: og:image
        content: {thumbnail}
---

{{/* DO NOT EDIT THIS FILE! IT IS BEING AUTO GENERATED */}}
{{/* PLEASE REFER TO THE CONTRIBUTION GUIDE ON THE DOCS PAGE */}}

""".format(
            block_name=block_name,
            slug="blocks/" + get_markdown_slug(block_folder_path),
            description=description.replace('"', '\\"'),
            thumbnail=thumbnail,
        )

    def add_python_docs_display(self):
        self.template += """\
import block_data from "@blocks/{block_folder_path}/block_data.json";
import PythonDocsDisplay from "@/components/PythonDocsDisplay.astro";
import DownloadStudioBanner from "@/components/DownloadStudioBanner.astro";

<DownloadStudioBanner />
<PythonDocsDisplay docstring={{block_data["docstring"]}} />
""".format(
            block_folder_path=self.block_folder_path,
        )
        return self

    def add_videos(self, videos: list[DocsVideo]):
        self.template += """\
## Videos

import { YouTube } from '@astro-community/astro-embed-youtube';

"""
        for video in videos:
            self.template += """\
### {title}

<div className="not-content">
<YouTube id="{src}" />
</div>

""".format(
                src=video.link, title=video.title
            )
        return self

    def add_python_code(self):
        self.template += """\
<details>
<summary>Python Code</summary>

import pythonCode from "@blocks/{block_folder_path}/{block_name}.py?raw";

import {{ Code }} from 'astro:components';

<Code code={{pythonCode}} lang="py" wrap theme="dracula" />

[Find this Flojoy Block on GitHub]({github_link})

</details>

""".format(
            github_link=self.github_link,
            block_folder_path=self.block_folder_path,
            block_name=self.block_name,
        )
        return self

    def add_example_app(self):
        self.template += """\
## Example App

import GetHelpWidget from "@/components/GetHelpWidget.astro";

<GetHelpWidget />

import app from "@blocks/{block_folder_path}/app.json";
import AppDisplay from "@/components/AppDisplay.tsx";

<AppDisplay app={{app}} blockName="{block_name}" client:visible />

import Example from "@blocks/{block_folder_path}/example.md";

<Example />

""".format(
            block_folder_path=self.block_folder_path,
            block_name=self.block_name,
        )
        return self

    def build(self):
        self.template += """\
{{/* DO NOT EDIT THIS FILE! IT IS BEING AUTO GENERATED */}}
{{/* PLEASE REFER TO THE CONTRIBUTION GUIDE ON THE DOCS PAGE */}}
""".format()
        return self.template
