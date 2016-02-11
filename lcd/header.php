<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<title>adrianstonge.tk</title>
<!-- Latest compiled and minified CSS -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> -->
<!-- Latest compiled and minified JavaScript -->
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
</head>
<body>
<div id="wrapper">
<div id="header">
<h1 class="title"><span>
<a href="<?php echo esc_url(home_url('/')); ?>">ADRIAN ST. ONGE</a>
</span></h1>
</div>
<!--TERMINAL TYPING CODE BY STEVE DEKORTE -->

    <script>
                function getAllElementsWithAttribute(attribute)
                {
                    var matchingElements = [];
                    var allElements = document.getElementsByTagName('*');
                    for (var i = 0, n = allElements.length; i < n; i++)
                    {
                        if (allElements[i].getAttribute(attribute))
                        {
                            matchingElements.push(allElements[i]);
                        }
                    }
                    return matchingElements;
                }

                var terminalElements = getAllElementsWithAttribute("terminal");

                function terminals_init()
                {
                    var elements = terminalElements;
                    for (var i = 0; i < elements.length; i++)
                    {
                        var e = elements[i]
                        e.completeHTML = e.innerHTML
                        e.innerHTML = ""
                        e.i = 0
                    }

                }

                function terminals_start()
                {
                    //terminalIntervalFunction = function(){ terminals_next() }
                    //setInterval(terminalIntervalFunction, 1000/60);
                    terminals_next()
                }

                function terminals_next()
                {
                    var done = true
                    var elements = terminalElements;

                    for (var i = 0; i < elements.length && done == true; i++)
                    {
                        var e = elements[i]

                        e.i ++

                        if (e.innerHTML.length >= e.completeHTML.length)
                        {
                            e.innerHTML = e.completeHTML
                        }
                        else
                        {
                            var s =  e.completeHTML.substring(0, e.i)

                            if (s.slice(-1) == " ")
                            {
                                if(e.innerHTML.length % 6 == 0 ) { s = s + "" } else { s = s + "|" }
                            }
                            else
                            {
                                s = s + "|"
                            }

                            e.innerHTML = s
                            e.parentNode.style.display = 'none'
                            e.parentNode.style.display = 'block'
                            done = false
                        }
                    }

                    if (!done)
                    {
                        // window.clearInterval(terminalIntervalFunction)
                        setTimeout(terminals_next, 50/20)
                    }
                }

            terminals_init()

             window.onload = function() { terminals_start() };
    </script>
