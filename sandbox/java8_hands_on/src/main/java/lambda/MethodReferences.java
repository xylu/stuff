package lambda;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class MethodReferences {

    public static void main(String[] args) {
        //constructor references

        List<Integer> integers = Arrays.asList(1, 2, 3);
        Stream<String> stream = integers.stream().map(String::valueOf);
        //we can't create T[] using generics but  now thanks to constructor references
        // we can do such thing:


        String[] strings = stream.toArray(String[]::new);

        System.out.println(strings);

    }
}
