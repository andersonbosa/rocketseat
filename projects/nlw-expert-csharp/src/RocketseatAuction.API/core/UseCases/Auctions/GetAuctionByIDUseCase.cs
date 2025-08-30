using Microsoft.EntityFrameworkCore;
using RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;

namespace RocketseatAuction.API.UseCases.Auctions.GetAuctionByID;

public class GetAuctionByIDUseCase
{
  private readonly IAuctionRepository _repository;
  public GetAuctionByIDUseCase(IAuctionRepository repositoryInjection) => _repository = repositoryInjection;

  public Auction? Execute(int id) => _repository.GetByID(id);
}