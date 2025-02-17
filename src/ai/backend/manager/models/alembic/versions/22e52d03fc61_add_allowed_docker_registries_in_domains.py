"""add_allowed_docker_registries_in_domains

Revision ID: 22e52d03fc61
Revises: c401d78cc7b9
Create Date: 2019-07-29 11:44:55.593760

"""
import os

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql
from sqlalchemy.sql import text

# revision identifiers, used by Alembic.
revision = "22e52d03fc61"
down_revision = "c401d78cc7b9"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "domains",
        sa.Column("allowed_docker_registries", postgresql.ARRAY(sa.String()), nullable=True),
    )
    # ### end Alembic commands ###

    print("\nSet default allowed_docker_registries.")
    allowed_registries = os.environ.get("ALLOWED_DOCKER_REGISTRIES", None)
    if allowed_registries:
        allowed_registries = allowed_registries.replace(" ", "")
        allowed_registries = "{index.docker.io," + allowed_registries + "}"
    else:
        allowed_registries = "{index.docker.io}"
    connection = op.get_bind()
    query = "UPDATE domains SET allowed_docker_registries = '{}';".format(allowed_registries)
    connection.execute(text(query))

    op.alter_column("domains", column_name="allowed_docker_registries", nullable=False)


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("domains", "allowed_docker_registries")
    # ### end Alembic commands ###
