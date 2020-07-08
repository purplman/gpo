$(() => {
  var count = 1;

  $("#calculate").on("click", (e) => {
    e.preventDefault();
    let result = null;
    var creditValues = [];
    var pointValues = [];

    $.each($(".credit"), (key, value) => {
      if ($(value).val()) creditValues.push($(value).val());
      else {
        $(value).css("border-color", "red");
        $(".error-credit").fadeIn().delay(3000).fadeOut();
      }
    });

    $.each($(".point"), (key, value) => {
      if ($(value).val()) pointValues.push($(value).val());
      else {
        $(value).css("border-color", "red");
        $(".error-point").fadeIn().delay(3000).fadeOut();
      }
    });

    var top = 0;
    var bottom = 0;
    var sum = 0;

    for (let i = 0; i < creditValues.length; i++) {
      top = creditValues[i] * pointValues[i];
      sum = sum + top;
    }

    for (let i = 0; i < creditValues.length; i++) {
      bottom = parseInt(creditValues[i]) + bottom;
    }

    result = sum / bottom;

    $(".result").html(Math.round(result));
  });

  $(document).on("click", ".add", (e) => {
    count = count + 1;
    e.preventDefault();
    if (count <= 7) {
      let control =
        '<div class="form">' +
        '<div class="form-control">' +
        '<label for="">Kredit sayı</label>' +
        '<input type="number" class="credit" />' +
        "</div>" +
        '<div class="form-control">' +
        '<label for="">Bal</label>' +
        '<input type="number" class="point" />' +
        "</div>" +
        "</div>";
      $(".form-wrapper").append(control);
    } else {
      alert("error");
    }
  });
});
