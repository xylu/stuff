package defaultmethods;

public class Student implements Musician, Player {
    // when two interfaces provide the same default method
    // we need to resolve it on our own
    @Override public void play() {
        Musician.super.play();
        Player.super.play();
    }
}
