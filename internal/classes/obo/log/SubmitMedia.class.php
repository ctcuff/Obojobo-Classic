<?php
namespace obo\log;

class SubmitMedia extends \obo\log\Trackable
{
	public $qGroupID;
	public $questionID;
	public $score;
	
	function __construct($userID = 0, $createTime = 0, $instID = 0, $qGroupID, $questionID, $score)
	{
		parent::__construct($userID, $createTime, $instID);
		$this->valueA = $this->questionID = $questionID;
		$this->valueB = $this->score = $score;
		$this->valueC = $this->qGroupID = $qGroupID;
	}
}
?>