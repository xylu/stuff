package lambda.streams;

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class ParallelExamples {

    public static void main(String[] args) {
        //to make it parallel
        String[] words = {"A", "B", "C"};
        Stream<String> parallelWords = Stream.of(words).parallel();

//        it is important that the operations are STATELESS and can be executed in an ARBITRARY ORDER.
        whatYouShouldNeverDo(words);

        //set unordered to get more benefits from running stream in parallel (as long as you don't care of order )
        IntStream sample = IntStream.range(1, 100).parallel().unordered().limit(25);




    }

    private static void whatYouShouldNeverDo(String[] words) {
        //example what NOT TO DO (shared state modification)
        int[] shortWords = new int[12];
        Stream.of(words).parallel().forEach(
                s -> {
                    if (s.length() < 12) shortWords[s.length()]++;
                });
        // Error—race condition!
        System.out.println(Arrays.toString(shortWords));
    }
}
