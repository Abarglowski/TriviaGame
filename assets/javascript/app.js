$(document).ready(function () {
            $("#start").click(function () {
                    var number = 50;
                    var correct = 0;
                    var incorrect = 0;
                    alert("The let game begin!");
                    $("#start").on("click", start);
                    $("#submit").on("click", finish);
                    $("#restart").on("click", restart);

                    function start() {
                        counter = setInterval(timer, 1000);
                        showMe(".question");
                        showMe(".answers");
                        showMe("#submit");
                        hideMe("#start");
                        hideMe(".rules");
                        hideMe("#restart");
                        hideMe("#results");
                        hideMe("#correct");
                        hideMe("#incorrect");}

                    function timer() {
                        number--
                        $("#timer").html("<h2>" + number + "</h2>");
                        if (number === 0) {
                            alert("Times Up!")
                            stop();}}
                

                        function stop() {
                            clearInterval(counter);

                            if(document.getElementById("q1a").checked)
                            {correct++}
                            else
                            {incorrect++}

                            if(document.getElementById("q2c").checked)
                            {correct++}
                            else
                            {incorrect++}

                            if(document.getElementById("q3c").checked)
                            {correct++}
                            else
                            {incorrect++}

                            if(document.getElementById("q4b").checked)
                            {correct++}
                            else
                            {incorrect++}

                            if(document.getElementById("q5a").checked)
                            {correct++}
                            else
                            {incorrect++}

                            $("#correct").html("<h2>" + correct + "</h2>");
                            $("#incorrect").html("<h2>" + incorrect + "</h2>");

                            $("#results").show();
                            $("#correct").show();
                            $("#incorrect").show();
                            $("#restart").show();
                            $(".question").hide();
                            $(".answers").hide();
                            $("#submit").hide();}

                        function finish() {
                            number = 1;
                            clearInterval(counter);
                            timer();}

                        function restart() {
                            number = 50;
                            start();}

                        function hideMe(e) {
                            $(e).hide();}

                        function showMe(e) {
                            $(e).show();}

                        start();

                    });

            });