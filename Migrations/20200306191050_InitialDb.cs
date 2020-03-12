using Microsoft.EntityFrameworkCore.Migrations;

namespace CertificateNumberGenerator.Migrations
{
    public partial class InitialDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CertificationSchemes",
                columns: table => new
                {
                    name = table.Column<string>(type: "CHARACTER VARYING(100)", nullable: false),
                    prefix = table.Column<string>(type: "CHARACTER VARYING(20)", nullable: false),
                    suffix = table.Column<string>(type: "CHARACTER VARYING(20)", nullable: false),
                    number = table.Column<string>(type: "CHARACTER VARYING(30)", nullable: false),
                    description = table.Column<string>(type: "CHARACTER VARYING(250)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CertificationSchemes", x => new { x.name, x.prefix, x.number, x.suffix });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CertificationSchemes");
        }
    }
}
