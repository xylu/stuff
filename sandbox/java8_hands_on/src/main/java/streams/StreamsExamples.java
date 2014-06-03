package streams;

import java.io.IOException;
import java.math.BigDecimal;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public class StreamsExamples {

    public static void main(String[] args) throws URISyntaxException {
        Stream.of("A", "B", "C").forEach(System.out::println);

        Stream.generate(Math::random).limit(10).forEach(System.out::println);

        Stream.empty();

        Stream.iterate(BigDecimal.ONE, n -> n.add(BigDecimal.TEN)).limit(5).forEach(System.out::println);

        Path path = Paths.get(StreamsExamples.class.getResource("/README").toURI());
        try (Stream<String> lines = Files.lines(path)) {
            lines.forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }

        //flatten steams
        List<String> words = Arrays.asList("abc", "def", "ghi");

        Stream<Stream<Character>> streamOfStreams = words.stream().map(w -> {
            List<Character> chars = new ArrayList<>();
            for (Character c : w.toCharArray()) {
                chars.add(c);
            }
            return chars.stream();
        });
        Stream<Character> stream = words.stream().flatMap(w -> {
            List<Character> chars = new ArrayList<>();
            for (Character c : w.toCharArray()) {
                chars.add(c);
            }
            return chars.stream();
        });

        //debug using peek
        Double[] random = Stream.generate(Math::random).peek((e) -> System.out.println("fetching :" + e)).
                limit(10).map(Double::new).toArray(Double[]::new);

        //combine streams

        Stream.concat(Stream.of("a", "b", "c"), Stream.of(1, 2, 3)).forEach(System.out::println);


        //stateful transformations

        Stream.of(1, 2, 2, 3, 3, 3, 4, 4, 4, 4).distinct();
        Stream.of(1, 2, 2, 3, 3, 3, 4, 4, 4, 4).sorted();
        Stream.of(1, 2, 2, 3, 3, 3, 4, 4, 4, 4).distinct().sorted(Comparator.comparing(Integer::byteValue).reversed());

        //Note optional is returned
        Optional<Integer> max = Stream.of(1, 2, 2, 3, 3, 3, 4, 4, 4, 4).max(Integer::compare);
        max.ifPresent(m -> System.out.println("max is:" + m));
        max.orElse(Integer.MAX_VALUE);

        //combine ifPresent + save result : use map instead of ifPresent
        Optional<Integer> map = max.map(i -> i * 2);
        map.ifPresent(System.out::println);

        //combine methods returing Optional

        Optional<Double> map1 = Optional.of(-16.0).map(t -> -1 * t).map(Math::sqrt);


        Optional<Double> doubleOptional = Optional.of(-16.0).flatMap(StreamsExamples::inverse).flatMap
                (StreamsExamples::squareRoot);

        //eh it's supposed to be
//          Double doubleOptional = Optional.of(-16.0).flatMap(StreamsExamples::inverse).flatMap
// (StreamsExamples::squareRoot);




    }


    public static Optional<Double> squareRoot(Double x) {
        return Optional.of(Math.sqrt(x));
    }

    public static Optional<Double> inverse(Double x) {
        return Optional.of(-1 * x);
    }
}
