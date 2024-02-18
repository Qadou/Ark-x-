// the type User holds a name (string) and an age (number)
type User = { name: string; age: number };

const john: User = { name: "John Doe", age: 23 };

type Absence = boolean[];
const johnAbsence: Absence = [true, true, false, true];