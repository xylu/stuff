package defaultmethods;

public interface Player {

    default void play(){
        System.out.println("Just give  me the ball!");
    }
    //since there is 'class wins' rule you can't make default method from Object class
    // this code would never be executed so compiler does not let you add it

    /*default String toString(){
        return "";
    }*/


    default void prepare() {
        System.out.println("Tuning instrument up!");
    }
}
