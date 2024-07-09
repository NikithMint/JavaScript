// Java program to demonstrate that 
// The static method does not have 
// access to the instance variable 

import java.io.*; 

public class GFG { 
	// static variable 
	static int a = 40; 

	// instance variable 
	int b = 50; 

	void simpleDisplay() 
	{ 
		System.out.println(a); 
		System.out.println(b); 
	} 

	// Declaration of a static method. 
	static void staticDisplay() 
	{ 
	System.out.println(a); 
	} 

	// main method 
	public static void main(String[] args) 
	{ 
		GFG obj = new GFG(); 
		obj.simpleDisplay(); 

		// Calling static method. 
		staticDisplay(); 
	} 
}
