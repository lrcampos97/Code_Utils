<?php
header('Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept"');
header("Access-Control-Allow-Origin: *", false);
header("Access-Control-Allow-Origin: *");

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

// Get Usuario
$app->get('/usuario/{IP}/{BANCO}/{LOGIN}/{SENHA}', function(Request $request, Response $response){
	///{LOGIN}/{SENHA}
    $IP = $request->getAttribute('IP');
    $BANCO = $request->getAttribute('BANCO');	
	$LOGIN = $request->getAttribute('LOGIN');
	$SENHA = $request->getAttribute('SENHA');
	
    
    $sql = "SELECT CDUSUARIO, LOGIN, SENHA FROM USUARIOS WHERE LOGIN = '$LOGIN' and SENHA = '$SENHA'";
    $arr = array();
    $data = array();
    
    try{
        // Conecta BD
        $username = 'SYSDBA';
        $password = 'money';
		$BANCO = str_replace('=', '\\', $BANCO);

		$dbh = ibase_connect($IP.'/3050:'.$BANCO, $username, $password);
					
        $sth = ibase_query($dbh, $sql);

        while ($row = ibase_fetch_object($sth)) {                             
			$data['LOGIN'] = $row->LOGIN;
            $data['SENHA'] = $row->SENHA;
			$data['CDUSUARIO'] = $row->CDUSUARIO;
			   
            $arr[] = array('USUARIO' =>$data);	
       }
	   
		
        ibase_free_result($sth);
        ibase_close($dbh);

        echo json_encode($arr);

    } catch(PDOException $e){	
        ibase_free_result($sth);
        ibase_close($dbh);
        echo '{"error": {"Message": '.$e->getMessage().'}';
    }
});

// Valida Conexão
$app->get('/ValidaConexao/{IP}/{BANCO}', function(Request $request, Response $response){
    $IP = $request->getAttribute('IP');
    $BANCO = $request->getAttribute('BANCO');
    
    $arr = array();
    $data = array();
    try{
        // Conecta BD
        $username = 'SYSDBA';
        $password = 'money';
		$BANCO = str_replace('=', '\\', $BANCO);

		if ($dbh = ibase_connect($IP.'/3050:'.$BANCO, $username, $password)){                         
            $data['Result'] = True;        
            $arr[] = array('result'=>$data['Result']);
        
		} else {            
			die('Erro ao conectar:' . ibase_errmsg());
		}
                    
        echo json_encode($arr);
        ibase_close($dbh);        
    } catch(PDOException $e){  
		echo teste;
        ibase_close($dbh);
        echo '{"error": {"Message": '.$e->getMessage().'}';
    }
});

// Get Lojas
$app->get('/GetLojas/{IP}/{BANCO}', function(Request $request, Response $response){
    $IP = $request->getAttribute('IP');
    $BANCO = $request->getAttribute('BANCO');
    
	$sql = "Select CDLOJA, DESCRICAO, SERVIDOR, BANCO From LOJAS";
	
    $arr = array();
    $data = array();
    try{
        // Conecta BD
        $username = 'SYSDBA';
        $password = 'money';
		$BANCO = str_replace('=', '\\', $BANCO);

		$dbh = ibase_connect($IP.'/3050:'.$BANCO, $username, $password);
					
        $sth = ibase_query($dbh, $sql);

        while ($row = ibase_fetch_object($sth)) {                             
			$data['CDLOJA'] = $row->CDLOJA;	
			$data['DESCRICAO'] = $row->DESCRICAO;
			$data['SERVIDOR'] = $row->SERVIDOR;
			$data['BANCO'] = $row->BANCO;				
			   
            $arr[] = array('LOJA' =>$data);	
        } 
		
		echo json_encode($arr);
		
        ibase_free_result($sth);
        ibase_close($dbh);
 
    } catch(PDOException $e){  
		echo teste;
        ibase_close($dbh);
        echo '{"error": {"Message": '.$e->getMessage().'}';
    }
});

// Get USUARIOS
$app->get('/GetUsuarios/{IP}/{BANCO}', function(Request $request, Response $response){
    $IP = $request->getAttribute('IP');
    $BANCO = $request->getAttribute('BANCO');
    
	$sql = "SELECT CDUSUARIO, LOGIN, SENHA FROM USUARIOS";
	
    $arr = array();
    $data = array();
    try{
        // Conecta BD
        $username = 'SYSDBA';
        $password = 'money';
		$BANCO = str_replace('=', '\\', $BANCO);

		$dbh = ibase_connect($IP.'/3050:'.$BANCO, $username, $password);
					
        $sth = ibase_query($dbh, $sql);

        while ($row = ibase_fetch_object($sth)) {                             
			$data['LOGIN'] = $row->LOGIN;
            $data['SENHA'] = $row->SENHA;
			$data['CDUSUARIO'] = $row->CDUSUARIO;
			   
            $arr[] = array('USUARIO' =>$data);	
       }
		
		echo json_encode($arr);
		
        ibase_free_result($sth);
        ibase_close($dbh);
 
    } catch(PDOException $e){  
		echo teste;
        ibase_close($dbh);
        echo '{"error": {"Message": '.$e->getMessage().'}';
    }
});

// Get Daddos
$app->get('/GetDados/{IP}/{BANCO}/{CDLOJA}', function(Request $request, Response $response){
    $IP = $request->getAttribute('IP');
    $BANCO = $request->getAttribute('BANCO');
	$CDLOJA = $request->getAttribute('CDLOJA');
    
	$sql = "*** SQL **";
	
    $arr = array();
    $data = array();
    try{
        // Conecta BD
        $username = 'username';
        $password = 'password';
		$BANCO = str_replace('=', '\\', $BANCO);

		$dbh = ibase_connect($IP.'/3050:'.$BANCO, $username, $password);
					
        $sth = ibase_query($dbh, $sql);

        while ($row = ibase_fetch_object($sth)) {                             
						
			if ($row->TOTAL_BRUTO <> '')
				$data['TOTAL_BRUTO'] = $row->TOTAL_BRUTO;	

			if ($row->TOTAL_LIQUIDO <> '')
				$data['TOTAL_LIQUIDO'] = $row->TOTAL_LIQUIDO;			
			
			if ($row->TOTALCUSTOLOJA <> '')
				$data['TOTALCUSTOLOJA'] = $row->TOTALCUSTOLOJA;	

			if ($row->CLIENTES <> '')
				$data['CLIENTES'] = $row->CLIENTES;	            
			
			if ($row->CLIENTES_BALCAO <> '')
				$data['CLIENTES_BALCAO'] = $row->CLIENTES_BALCAO;				
			
			if ($row->CLIENTES_TELE <> '')
				$data['CLIENTES_TELE'] = $row->CLIENTES_TELE;	 
			
			if ($row->TOTALDESC <> '')
				$data['TOTALDESC'] = $row->TOTALDESC;		

			if ($row->DESC_VENDA <> '')
				$data['DESC_VENDA'] = $row->DESC_VENDA;	

			if ($row->DESC_PROMO <> '')
				$data['DESC_PROMO'] = $row->DESC_PROMO;				
			
			//if ($row->DESC_PBM <> '')
				$data['DESC_PBM'] = $row->DESC_PBM;							
			
			if ($row->DESC_CONV <> '')
				$data['DESC_CONV'] = $row->DESC_CONV;										
       }
		$arr[] = array('DADOS'=>$data);	
		echo json_encode($arr);
		
        ibase_free_result($sth);
        ibase_close($dbh);
 
    } catch(PDOException $e){  
        ibase_close($dbh);
        echo '{"error": {"Message": '.$e->getMessage().'}';
    }
});




