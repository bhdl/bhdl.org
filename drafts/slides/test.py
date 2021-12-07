base << C("1000u", to=vin)
base << (
    R("1k", to=vcc),
    R("1k", to=gnd),
)

class Transistor(Part):
    REFDES_PREFIX = "Q"
    PINS = ["B", "C", "E"]


q = Transistor()
base << q.B

q.E << (
    R("100", to=gnd),
    C("1u", to=gnd),
)

q.C << (
    C("100u", to=Net("vout")),
    R("100", "Rc", to=vcc),
)