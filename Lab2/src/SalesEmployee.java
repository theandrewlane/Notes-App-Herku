public class SalesEmployee extends Fraction{
    //Disk Class
    public boolean canPlay(Object d) {
        if (this == d) return true;
        if(getClass() instanceof d.getClass()) return true;
        if (getClass() != d.getClass()) return false;
        if (d == null) return false;
    }

    //Spotted Disk
    public canPlay(OBject d){
        if(super.canPlay(d) && spots == this.spots) {
            return true;
        }
        else{
            return false;
        }
    }



    //Colored Disk
    public boolean canPlay(Disk d){
        Disk disk = new Disk();
        return (disk.canPlay(d) && color.equals(this.color)) ?  true :  false;
    }



    //Spotted Disk
    public boolean canPlay(Disk d) {
        return (super.canPlay(d) && spots == this.spots) ? true : false;
    }