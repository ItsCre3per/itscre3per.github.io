<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/style.css">
        <title>
            <?php

            if(isset($_COOKIE["password"])) {
                echo "Creeper Control Panel";
            } else {
                echo "Log In";
            }
            ?></title>
    </head>
    <body>
        <div style="padding:5px; margin:5px;">
            <div style="position:absolute;z-index:1;">
                <a href="../index.html"><button>Home</button></a>
                <a href="../LOTRGame/"><button>LOTR Game</button></a>
                <a href="panel.php"><button>Control Panel</button></a>
                <a href="https://youtube.com/@itscre3per"><button>My YouTube</button></a>
            </div>
            <h1 class="title"><?php
                if(isset($_COOKIE["password"])) {
                    echo "Creeper's Control Panel";
                } else echo "Log In";
                ?></h1>

            <form method="post" style="text-align:center;
            <?php if(isset($_POST["username"]) && isset($_POST["password"])) echo "display:none;"; ?>">
                <label for="username" class="par">Username:</label>
                <input type="text" name="username" style="background-color:#89da6a"><br><br>
                <label for="password" class="par">Password:</label>
                <input type="password" name="password" style="background-color:#89da6a"><br><br>
                <input type="submit" value="Submit" class="custom_button" style="color:#a5b5a6">
            </form>
            <?php
            if(isset($_POST["username"]) && isset($_POST["password"])) {
                $username = $_POST["username"];
                $hashedPassword = sha1($_POST["password"]);
                if ($username == "ItsCre3per" || $hashedPassword == "a842ebcc6b23ab36d815d0825d6edba72bb258e1") {
                    echo "Logged in as $username";
                }
                if (!isset($_COOKIE["password"])) {
                    //setcookie("password", "a842ebcc6b23ab36d815d0825d6edba72bb258e1", time() + 86400 * 7);
                }
            }?>
        </div>
    </body>
</html>

