    <script>
        <?php //- - - - - - - - - - - - - - - - - - - - -
        // Woofs
        //- - - - - - - - - - - - - - - - - - - - - - - -?>
        jQuery(function($){
            <?php 
                if(isset($_POST['woofy'])){
                    foreach($_POST['woofy'] as $jsonedWoof){
                        foreach(json_decode($jsonedWoof) as $woof){
                            echo "woofy.create('",$woof->msg,"', '",$woof->type,"');";
                        }
                    }
                }
            ?>

            <?php //- - - - - - - - - - - - - - - - - - - - -
            // App data
            //- - - - - - - - - - - - - - - - - - - - - - - -?>
            app.route = '<?= $page->template() ?>';
        });
    </script>
</body>
</html>