export const msgResponse = (code: String, field: String) => {
  const MSG = [{ code: "x", msg: `${field}`, type: "info", status: 201 }];
  const RES = MSG.find((e) => e.code == code);
  return (
    RES || {
      code: "any",
      type: "error",
      msg: "No se encontro mensaje de error",
      status: 404,
    }
  );
};
