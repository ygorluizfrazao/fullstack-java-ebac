const phoneMasks = ["(00) 0000-0000#", "(00) 0 0000-0000"];

$(document).ready(() => {
  $("#email").mask("A@A");

  $("#cpf").mask("000.000.000-00", {
    placeholder: "Ex.: 999.999.999-999",
  });
  $("#phone").mask("(00) 0000-0000#", {
    placeholder: "Ex.: (11) 9 9999-9999 ou (11) 3222-2222",
    onKeyPress: (phone, event, field, options) => {
      phone.length >= 15
        ? $("#phone").mask(phoneMasks[1], options)
        : $("#phone").mask(phoneMasks[0], options);
    },
  });
  $("#cep").mask("00000-000", {
    placeholder: "Ex.: 65000-000",
  });
});
