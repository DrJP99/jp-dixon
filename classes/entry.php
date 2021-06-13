<?php

	class entry {
		private $id;
		private $date;
		private $title;
		private $excerpt;
		private $content;
		private $dbh;
	}

	function __construct() {
		$this -> dbh = new PDO("mysql:dbname = blog_tut;host = localhost", 'root', '');
	}

	public function getId() {
		return $this -> id;
	}

	public function setId($id) {
		$this -> id = $id;

		return $this;
	}

	public function getDate() {
		return $this -> date;
	}

	public function setDate($date) {
		$this -> date = $date;

		return $this;
	}

	public function getTitle() {
		return $this -> title;
	}

	public function setTitle($title) {
		$this -> title = $title;

		return $this;
	}

	public function getExcerpt() {
		return $this -> excerpt;
	}

	public function setExcerpt($excerpt) {
		$this -> excerpt = $excerpt;

		return $this;
	}

	public function getContent() {
		return $this -> content;
	}

	public funciton setContent($content) {
		$this -> content = $content;

		return $this;
	}



 ?>