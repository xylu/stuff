
package util;
//Based on : http://nurkiewicz.blogspot.com/2013/08/optional-in-java-8-cheat-sheet.html
// In short never assign null to variable again ;-)
// Java < 1.8 -> use http://docs.guava-libraries.googlecode.com/git/javadoc/com/google/common/base/Optional.html

import java.util.Optional;

public class OptionalSamples {

    public void init() {
        String notNull = "A";
        Optional<String> optNotNull = Optional.of(notNull);
        Optional<String> optNullable = Optional.ofNullable(null);
        Optional<String> optNull = Optional.empty();
        //Optional is IMMUTABLE
//        optNull.set
    }

    public void doSthIfNotNull() {
        //if (x != null) {
        //    print(x);
        // }
        Optional<String> optNotNull = Optional.of("A");
        Optional<String> optNull = Optional.empty();

        optNotNull.ifPresent(this::print);

        optNull.ifPresent(this::print);

    }


    public void filter() {
        //if (x != null && x.contains("ab")) {
        //   print(x);
        // }
        Optional<String> optNotNull = Optional.of("ab");

        optNotNull.filter(a -> a.contains("ab"))
                .ifPresent(this::print);
    }


    public void mapIfPresent() {
        //if (x != null) {
        //   String t = x.trim();
        // if (t.length() > 1) {
        //   print(t);
        //}
        Optional<String> optNotNull = Optional.of("abc");
        optNotNull.map(String::trim)
                .filter(a -> a.length() > 1)
                .ifPresent(this::print);
    }


    public void getOrElse() {
        //int len = (x != null)? x.length() : -1;
        Optional<String> opt = Optional.of("abc");
        System.out.println(opt.map(String::length).orElse(-1));

        Optional<String> optNull = Optional.empty();
        System.out.println(optNull.map(String::length).orElseGet(() -> {

            try {
                System.out.println("Long running task evaluating alternative value (evaluation delayed till it's " +
                        "really needed)...");
                Thread.sleep(5000);
                System.out.println("Done.");
                return -1;
            } catch (InterruptedException e) {
                e.printStackTrace();
                throw new RuntimeException("BLE", e);
            }
        }));
    }


    public void methodThatTakesNotNullButMightReturnOptional() {
        //public String findSimilar(@NotNull String s) //...
        //String similarOrNull = x != null? findSimilar(x) : null;

        Optional<Optional<String>> badIdea = Optional.of("A").map(this::tryFindSimilar);
        Optional<String> rightApproach = Optional.of("A").flatMap(this::tryFindSimilar);


    }

    public void throExceptionWhenNotPresent() {
        //    public char firstChar(String s) {
        //    if (s != null && !s.isEmpty())
        //            return s.charAt(0);
        //    else
        //            throw new IllegalArgumentException();
        //}

        Optional.<String>empty()
                .filter(s -> !s.isEmpty()).map(s -> s.charAt(0))
                .orElseThrow
                        (IllegalArgumentException::new);
    }


    private Optional<String> tryFindSimilar(String s) {
        return Optional.ofNullable(s);
    }


    public void print(String s) {
        System.out.println(s);
    }

    public static void main(String[] args) {
        OptionalSamples optionalSamples = new OptionalSamples();

        optionalSamples.init();

        optionalSamples.doSthIfNotNull();

        optionalSamples.filter();

        optionalSamples.mapIfPresent();

        optionalSamples.getOrElse();

        optionalSamples.methodThatTakesNotNullButMightReturnOptional();


    }
}
