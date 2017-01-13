<?php

$curr = '1.1.0';
$url = 'https://fahrplan.manuelhu.de/download/';

if ( $_GET['ver'] != $curr ) {
	echo '<?xml version="1.0" encoding="utf-8"?>';
	echo '<info>';
	echo '<version>' . $curr . '</version>';
	echo '<url>' . $url . '</url>';
	echo '</info>';
}
