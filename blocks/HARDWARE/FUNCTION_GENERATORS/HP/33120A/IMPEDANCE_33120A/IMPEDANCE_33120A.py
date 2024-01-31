from flojoy import flojoy, DataContainer, String, SerialConnection
from typing import Optional, Literal


@flojoy(inject_connection=True)
def IMPEDANCE_33120A(
    connection: SerialConnection,
    impedance: Literal["50", "max"] = "50",
    default: Optional[DataContainer] = None,
) -> String:
    """Set the output impedance for a 33120A function generator.

    Impedance - AKA termination or load.

    Requires an OPEN SERIAL block at the start of the app to connect with
    the instrument.

    Parameters
    ----------
    connection: SerialConnection
        The VISA address (requires a OPEN SERIAL node).
    offset: float
        The offset of the output waveform, in volts.
    option: Literal
        Use the input value, or set to the maximum or minimum.

    Returns
    -------
    DataContainer
        String: Summary of waveform generator settings.
    """

    instru = connection.get_handle()

    instru.write(f"OUTP:LOAD {impedance}\n".encode("utf-8"))

    return String(s=f"{impedance}")
