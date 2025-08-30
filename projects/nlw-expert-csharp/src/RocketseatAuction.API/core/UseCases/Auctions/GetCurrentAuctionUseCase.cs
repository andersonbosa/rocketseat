using RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;

namespace RocketseatAuction.API.UseCases.Auctions.GetCurrent;

public class GetCurrentAuctionUseCase
{
  private readonly IAuctionRepository _repository;
  public GetCurrentAuctionUseCase(IAuctionRepository repositoryInjection) => _repository = repositoryInjection;

  public Auction? Execute() => _repository.GetCurrent();
}
