<?php

 require_once dirname(__FILE__) . '/../lightmvc/ActionController.php';

class IndexController extends ActionController
{
    public function indexAction()
    {
		$this->_includeTemplate = false;
    }    
}
