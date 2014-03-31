package lambda.streams;

import java.util.Arrays;
import java.util.IntSummaryStatistics;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class PrimitiveStreams {

    public static void main(String[] args) {
        System.out.println("Int stream of:");
        IntStream.of(1, 2, 3, 4).forEach(System.out::println);
        Arrays.stream(new double[]{1.0, 1.25, 1.5, 1.75, 2.0}, 2, 4).forEach(System.out::println);

        System.out.println("Range:");
        IntStream.range(1, 10).forEach(System.out::println);
        IntStream.rangeClosed(12, 13).forEach(System.out::println);

        int[] ints = IntStream.range(1, 10).toArray();
        IntSummaryStatistics stats = IntStream.range(1, 10).summaryStatistics();
        System.out.printf("Min/Avg/Max/Count : %d / %.2f / %d / %d\n",stats.getMin(),stats.getAverage(),stats.getMax(),stats.getCount());
        //convert primitive to boxed
        Stream<Integer> boxed = IntStream.range(1, 10).boxed();


    }
}
