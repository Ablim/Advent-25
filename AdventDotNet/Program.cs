namespace AdventDotNet;

public static class Program
{
    public static async Task Main(string[] args)
    {
        const int day = 5;

        var input = await File.ReadAllLinesAsync($"../../../../input/{day}.txt"); 
        
        Console.WriteLine($"Day {day}, part 1");
        Console.WriteLine(Day5.SolvePart1(input));
        
        Console.WriteLine($"\nDay {day}, part 2");
        Console.WriteLine(Day5.SolvePart2(input));
    }
}