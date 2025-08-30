namespace RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;

public interface IAuctionRepository
{
  Auction? GetCurrent();
  Auction? GetByID(int id);
}
