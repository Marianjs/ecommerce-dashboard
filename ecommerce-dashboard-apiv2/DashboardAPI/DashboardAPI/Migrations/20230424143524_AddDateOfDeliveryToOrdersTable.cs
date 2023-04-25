using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DashboardAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddDateOfDeliveryToOrdersTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Orders",
                newName: "DateOfOrder");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfDelivery",
                table: "Orders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfDelivery",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "DateOfOrder",
                table: "Orders",
                newName: "Date");
        }
    }
}
