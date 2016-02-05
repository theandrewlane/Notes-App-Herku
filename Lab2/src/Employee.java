public class Employee
{
    private String name;
    private float salary;
    int spots;
    public Employee(String name, float salary)
    {
        this.name = name;
        this.salary = salary;
    }
    public float calcPay()
    {
        return salary / 24;
    }

    public boolean canPlay(Object d) {
        if (this == d) return true;
        if(getClass() instanceof d.getClass()) return true;
        if (getClass() != d.getClass()) return false;
        if (d == null) return false;
    }
} // Employee
