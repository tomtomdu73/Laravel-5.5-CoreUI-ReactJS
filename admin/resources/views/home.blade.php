<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Blockcharts</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">

        <!-- Scripts -->
        <script>
            window.Laravel =
            <?php echo json_encode([
                           'csrfToken' => csrf_token(),
                       ]); ?>
        </script>
    </head>
    <body>
    <h2 style="text-align: center"> Welcome on Blockcharts</h2>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>