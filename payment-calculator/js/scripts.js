
$(document).ready(function () {

    $('#bt1').click(function () {
        var modal = $('#pay-modal');
        var currPrice = $('#price1').text();
        $('#price-md').val(parseInt(currPrice));
        $('#price-modal-text').text(currPrice);
        modal.show();
    })

    $('#bt2').click(function () {
        var modal = $('#pay-modal');
        var currPrice = $('#price2').text();
        $('#price-md').val(parseInt(currPrice));
        $('#price-modal-text').text(currPrice);
        modal.show();
    })

    $('#bt3').click(function () {
        var modal = $('#pay-modal');
        var currPrice = $('#price3').text();
        $('#price-md').val(parseInt(currPrice));
        $('#price-modal-text').text(currPrice);
        modal.show();
    })

    $('#bt4').click(function () {
        var modal = $('#pay-modal');
        var currPrice = $('#price4').text();
        $('#price-md').val(parseInt(currPrice));
        $('#price-modal-text').text(currPrice);
        modal.show();
    })

    $('#bt5').click(function () {
        var modal = $('#pay-modal');
        var currPrice = $('#price5').text();
        $('#price-md').val(parseInt(currPrice));
        $('#price-modal-text').text(currPrice);
        modal.show();
    })

    $('#buy-bt').click(function () {
        alert('The Transaction Has been completed!');
        location.reload();
    })

    $('.interest-rate-bt').each(function () {
        $(this).click(function () {
            var price = $('#price-md').val();
            var rate = parseInt($(this).val());
            var yearTime = 1;
            switch (rate) {
                case 4:
                    yearTime = 2;
                    break;
                case 8:
                    yearTime = 3;
                    break;
                default:
                    yearTime = 1;
            }

            //interest calculating
            var monthPeriod = yearTime * 12;
            var yearlyInterest = price * rate / 100;
            var monthlyInterest = yearlyInterest / 12;
            var totalInterest = yearlyInterest * yearTime;
            //payment calculating
            var totalPayment = price + totalInterest;
            var monthlyPayment = totalPayment / monthPeriod;

            console.log("price" + price);
            console.log("rate" + rate);
            console.log("yeartime" + yearTime);

            console.log("monthPeriod" + monthPeriod);
            console.log("yearInterest" + yearlyInterest);
            console.log("totalPayment" + totalPayment);
            console.log("monthlypayment" + monthlyPayment);

            $('#period-md').text(monthPeriod);
            $('#interest-md').text(monthlyInterest
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            console.log(monthlyInterest);
            console.log(monthlyPayment);
            $('#monthly-payment-md').text(monthlyPayment
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            

            $('#buy-bt').prop('disabled', false);
        })
    })
})

function onBackPressed() {
    $('#pay-modal').hide();
    $('#period-m').empty();
    $('#interest-m').empty();
    $('#monthly-pay-m').empty();
    $('#buy-bt').prop('disabled', true);
}

