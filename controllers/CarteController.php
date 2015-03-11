<?php

require_once dirname(__FILE__) . '/../lightmvc/ActionController.php';

class CarteController extends ActionController
{
    /**
     * Simple index page which links to the main available actions
     */
    public function indexAction()
    {
        if(isset($_GET['lang']) && $_GET['lang']=='fr'){
			$this->language="fr";
		}
		else if(isset($_GET['lang']) && $_GET['lang']=='en'){
			$this->language="en";
		}
		else{
			$this->language="fr";
		}
    }
}
