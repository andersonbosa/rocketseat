using Microsoft.EntityFrameworkCore;
using RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;

namespace RocketseatAuction.API.Repositories.DataAccess;

public class UserRepository : IUserRepository
{
  private readonly RocketseatAuctionDbContext _dbContext;

  public UserRepository(RocketseatAuctionDbContext dbContextInjection) => _dbContext = dbContextInjection;

  public bool ExistUserWithEmail(string email)
  {
    return _dbContext.Users.Any(user => user.Email.Equals(email));
  }

  public User? GetUserByEmail(string email) {
    return _dbContext.Users.First(user => user.Email.Equals(email));
  }
}