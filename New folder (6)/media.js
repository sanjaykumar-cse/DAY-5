 class getMedianOfTwoSortedArrays {
	 static  getMedian( [],  [], int )
	{
	     i = 0;  /* Current index of i/p array ar1[] */
	     j = 0; /* Current index of i/p array ar2[] */
	     count;
	     m1 = -1, m2 = -1;
	 
	    /* Since there are 2n elements, median will be average
	     of elements at index n-1 and n in the array obtained after
	     merging ar1 and ar2 */
	    for (count = 0; count <= n; count++)
	    {
	    	
	        /*Below is to handle case where all elements of ar1[] are
	          smaller than smallest(or first) element of ar2[]*/
	        if (i == n)
	        {
	        	
	            m1 = m2;
	            m2 = ar2[0];
	            System.out.println(m2);
	            break;
	        }
	 
	        /*Below is to handle case where all elements of ar2[] are
	          smaller than smallest(or first) element of ar1[]*/
	        else if (j == n)
	        {
	        	System.out.println("2");
	            m1 = m2;
	            m2 = ar1[0];
	            break;
	        }
	 
	        if (ar1[i] < ar2[j])
	        {
	        	
	            m1 = m2;  /* Store the prev median */
	            m2 = ar1[i];
	            i++;
	        }
	        else
	        {
	            m1 = m2;  /* Store the prev median */
	            m2 = ar2[j];
	            j++;
	        }
	    }
	    System.out.println("m1 m2 " +m1+ " " + m2);
	    return (m1 + m2)/2;
	}
	
	 static  main(String){
		
	    
	     n1 = ar1.length;
	     n2 =ar2.length;
	    
	   
	    if (n1 == n2)
	        System.out.println("Median is " + getMedian(ar5, ar6, n1));
	    else
	        System.out.println("Doesn't work for arrays of unequal size");
	 
	}

}

 