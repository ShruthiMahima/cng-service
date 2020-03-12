using Microsoft.EntityFrameworkCore.Migrations;

namespace CertificateNumberGenerator.Migrations
{
    public partial class InitialDbv1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "CertificationSchemes",
                type: "CHARACTER VARYING(250)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "CHARACTER VARYING(250)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "CertificationSchemes",
                type: "CHARACTER VARYING(250)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "CHARACTER VARYING(250)");
        }
    }
}
