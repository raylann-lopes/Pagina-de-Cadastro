const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};
const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1)$2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
$(document).ready(function () {
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    localStorage.setItem("activeTab", $(e.target).attr("href"));
  });
  // Aqui salva o índice ao qual corresponde a aba. Você pode vê-lo na ferramenta de desenvolvimento do Chrome.
  //Obtém os dados da localStorage
  var activeTab = localStorage.getItem("activeTab");
  if (activeTab) {
    $('a[href="' + activeTab + '"]').tab("show");
  }

  //incluir
  $("#gravar").on("click", function () {
    var cont = 0;
    $("#actions .required").each(function () {
      if ($(this).val() == "") {
        $(this).css({ border: "1px dashed #F00" });
        cont++;
      }
    });
    if (cont == 0) {
      var email = $("#email");
      var telefone = $("#telefone");
      var src = "actions.php";
      $.ajax({
        url: src,
        type: "POST",
        data: { email: email.val(), telefone: telefone.val() },
        success: function (data) {
          console.log(data);
          if (data == 1) {
            $.alertable.alert("Email já cadastrado, por favor altere!");
            return false;
          } else if (data == 2) {
            $.alertable.alert("Telefone já cadastrado, por favor altere!");
            return false;
          } else {
            var dados = $("#actions").serialize();
            //	var url = src;
            $.ajax({
              type: "POST",
              url: src,
              data: dados,
              success: function (data) {
                $.alertable.alert(
                  "Gravado com sucesso! Em breve entraremos em contato!"
                );
                $("#actions").each(function () {
                  this.reset();
                });
                $("#actions .required").css({ border: "1px solid #Ccc" });
              },
            });
          }
        },
      });
    }
  });
});
