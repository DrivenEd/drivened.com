<?php snippet('header') ?>
<a name="login"></a>
<header>
    <img class="bg" src="<?= url('assets/img/bg/clouds.jpg') ?>">
    <div id="login">
        <h1>Driven<b>Ed</b> <sub>rapid Education with Google Drive</sub></h1>
        <button class="login-button">Login with Google</button>
        <p class="color-invert">or learn more below
    </div>
</header>

<nav>
    <a href="#about">About</a>
    <a href="#how">How</a>
    <a href="#security">Security</a>
    <a href="#future">Future</a>
    <a href="#login" class="login-button">Login</a>
</nav>

<section>
    <div class="c8">
        <a name="about"></a>
        <h2>About</h2>
        <p>DrivenEd transforms your Google Spreadsheets into apps customized specifically for you, your students, and your research team.
        <p>It leverages Google Drives realtime collaboration, long-term document revisioning, and extreme portability to make Education even more efficient.
        <p>We purposefully built DrivenEd without a database for maximum security. Your data can never leak out because it's all kept in your own Google Drive.
    </div><div class="c4">
        <div class="badge big"></div>
    </div>
</section>

<?php snippet('scripts') ?>

<script src="<?= url('assets/js/pages/home.js') ?>"></script>

<?php snippet('footer') ?>