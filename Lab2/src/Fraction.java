/**
 * Created by k1ngdr3w on 9/13/15.
 */
public class Fraction extends Employee{
    public Fraction f_1, f_2, f_3;
    private int numerator, denominator;

    public Fraction(int numerator){
        this.numerator = numerator;
        this.denominator = 1;
    }

    public Fraction(int numerator, int denominator){
        this.numerator = numerator;
        this.denominator = denominator;
        if((numerator > denominator && denominator == 1) || (denominator ==1)){
            reduceFrac();
        }
    }
    private int gcd(Fraction frac){
        int u = frac.numerator;
        int v = frac.denominator;
        u = (u < 0) ? -u : u; // make u non-negative
        v = (v < 0) ? -v : v; // make v non-negative
        while (u > 0)
        {
            if (u < v)
            {
                int t = u; // swap u and v
                u = v;
                v = t;
            }
            u -= v;
        }
        return v; // the GCD of u and
    }

    private void reduceFrac(){
        int gcd = gcd(new Fraction(this.numerator, this.denominator));
        this.numerator = this.numerator/gcd;
        this.denominator = this.denominator/gcd;
    }

    public boolean canPlay(Object d) {
        if (this == d) return true;
        if(getClass() instanceof d.getClass()) return true;
        if (getClass() != d.getClass()) return false;
        if (d == null) return false;
    }
}
