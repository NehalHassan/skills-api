export function validateEmail(email: string) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

export function getMissingFields(object: any) {
  return Object.entries(object)
    .filter((field) => !field[1])
    .map((x) => x[0]);
}
