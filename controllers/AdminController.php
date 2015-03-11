<?php

require_once dirname(__FILE__) . '/../lightmvc/ActionController.php';

class AdminController extends ActionController
{
    public function indexAction()
    {
        $this->_includeTemplate = false;
    }
}
