using Bogus;
using FluentAssertions;
using Moq;
using RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Enums;
using RocketseatAuction.API.UseCases.Auctions.GetCurrent;
using Xunit;

namespace UseCases.Test.Auctions.GetCurrent;

public class GetCurrentAuctionUseCaseTest
{
  [Fact]
  public void Success()
  {
    // Arrange
    var auctionReturnExample = new Faker<Auction>()
        .RuleFor(auction => auction.Id, f => f.Random.Number(1, 700))
        .RuleFor(auction => auction.Name, f => f.Lorem.Word())
        .RuleFor(auction => auction.Starts, f => f.Date.Past())
        .RuleFor(auction => auction.Ends, f => f.Date.Future())
        .RuleFor(auction => auction.Items, (f, createdAuction) => new List<Item>
        {
                    new Item
                    {
                        Id = f.Random.Number(1, 700),
                        Name = f.Commerce.ProductName(),
                        Brand = f.Commerce.Department(),
                        BasePrice = f.Random.Decimal(50, 1000),
                        Condition = f.PickRandom<Condition>(),
                        AuctionId = createdAuction.Id
                    }
        }).Generate();

    var fakeRepository = new Mock<IAuctionRepository>();
    fakeRepository
        .Setup(i => i.GetCurrent())
        .Returns(auctionReturnExample);

    var useCase = new GetCurrentAuctionUseCase(fakeRepository.Object);

    // Act
    var auction = useCase.Execute();

    // Assert
    auction.Should().NotBeNull();
    auction.Id.Should().Be(auctionReturnExample.Id);
    auction.Name.Should().Be(auctionReturnExample.Name);
  }
}