package defaultmethods;

public class Me extends TeamPlayer implements Musician{


    public static void main(String[] args) {
        //"class wins" rule -> play method take from superclass
        Me me = new Me();
        me.play();
        me.prepare();
    }
}
