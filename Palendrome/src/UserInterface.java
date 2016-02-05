import java.util.Scanner;

/**
 * Created by k1ngdr3w on 9/3/15.
 */


public class UserInterface extends PalendromeChecker{

//Return the arg if any
    public static String parseInput(String s){
        //contains args
        if(s.length() > 10)
           return s.substring(0, s.length());
        else{
            return "";
        }
    }
}
