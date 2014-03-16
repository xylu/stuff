package lambda;

import java.util.Arrays;
import java.util.List;

public class HelloLambda {

    public static void main(String[] args) {
        List<String> helloLambda = Arrays.asList("Hello Lambda".split(""));
        helloLambda.forEach(x -> System.out.print(x + " "));
    }
}
