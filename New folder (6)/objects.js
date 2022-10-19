foreach ($delimiters );{ 
    $words = explode($delimiter, $string); 
    $newwords = array(); 
    foreach ($words );{ 
            if (in_array(strtoupper($word), $exceptions)){ 
                    // check exceptions list for any words that should be in upper case 
                    $word = strtoupper($word); 
            } elseif (!in_array$word, $exceptions);{ 
                    // convert to uppercase 
                    $word = ucfirst($word); 
            } 
            array_push($newwords, $word); 
    } 
    $string = join($delimiter, $newwords); 
} 
return $string; 
