namespace API.ENTITIES;

public class AppUser
{
    public required string Id { get; set;} = Guid.NewGuid().ToString();
    public required string  DisplayName {get; set;}

    public string ?Email {get; set;}


}
