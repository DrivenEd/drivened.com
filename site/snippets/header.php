<!DOCTYPE html>
<html lang="en">
<head>
    <title><?= html($site->title()) ?> - <?= html($page->title()) ?></title>

    <meta charset="utf-8" />
    <meta name="description" content="<?php echo html($site->description()) ?>" />
    <link href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet" type="text/css">
    <link href="<?= url('assets/favicon.ico') ?>" rel="icon" type="image/x-icon">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="<?= url('assets/js/underscore.js') ?>"></script>
    <script src="<?= url('assets/js/global.js') ?>"></script>

    <?php echo css('assets/styles/home.css') ?>
</head>

<body>
