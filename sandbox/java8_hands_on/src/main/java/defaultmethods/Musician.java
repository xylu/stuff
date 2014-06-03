package defaultmethods;

public interface Musician {

    default void play() {
        System.out.println("Cling, clang, cling");
    }

    //now we can have static method in interface :)
    // no more need to create Path/Paths or Collection/Collections
    // (although they are still available in Java8)
      static void prepare() {
        System.out.println("Tuning instrument up!");
    }
}
