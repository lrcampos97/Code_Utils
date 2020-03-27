<?php
    class db{
        // Properties
        private $username = 'username';
        private $password = 'password';

        // Connect Firebird
        public function connect(){            
            $dbConnection = ibase_connect('DATABASE_FIREBIRD', $username, $password); 
            $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dbConnection;
        }

    }


    