FROM python:3.12.0-slim-bookworm

ENV PYTHONBUFFERED 1
ENV PYTHONWRITEBYTECODE 1

ENV APP=/app

# Change the workdir.
WORKDIR $APP

# Install the requirements
COPY requirements.txt $APP
RUN pip3 install -r requirements.txt

# Copy the rest of the files
COPY . $APP

# --- ADD THIS LINE ---
# Grant permissions to user 1000 (which we use in Kubernetes)
RUN chown -R 1000:1000 /app
# ---------------------

EXPOSE 8000

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/bin/bash","/app/entrypoint.sh"]

CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "djangoproj.wsgi"]